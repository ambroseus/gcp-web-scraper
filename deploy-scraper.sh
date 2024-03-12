gcloud functions deploy web-scraper \
    --entry-point=scraper \
    --trigger-http \
    --gen2 \
    --runtime=nodejs20 \
    --memory=4096M \
    --timeout=60s \
    --region=europe-central2 \
    --source=. \
    --allow-unauthenticated
    