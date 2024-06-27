echo Starting Upload Script
set /p version="Version (n for only latest): "
if /i "%version%" == "n" (
docker build . -t oribia/dm-helper
docker push oribia/dm-helper
) else (
docker build . -t oribia/dm-helper
docker build . -t oribia/dm-helper:%version%
docker push oribia/dm-helper:latest
docker push oribia/dm-helper:%version%
)
pause