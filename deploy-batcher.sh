gcloud functions deploy web-scraper-batch \
    --entry-point=batcher \
    --trigger-http \
    --gen2 \
    --runtime=nodejs20 \
    --memory=512M \
    --timeout=10s \
    --region=europe-central2 \
    --source=. \
    --allow-unauthenticated
    