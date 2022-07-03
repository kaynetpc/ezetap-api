echo "starting docker services"
service docker start
echo "spining containers"
docker-compose up -d --build