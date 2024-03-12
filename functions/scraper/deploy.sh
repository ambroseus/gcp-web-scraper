gcloud functions deploy web-scraper \
    --entry-point=handler \
    --trigger-http \
    --gen2 \
    --runtime=nodejs20 \
    --memory=1024M \
    --timeout=60s \
    --region=europe-central2 \
    --source=. \
    --allow-unauthenticated
    