gcloud functions deploy web-scraper-sub \
    --entry-point=handler \
    --trigger-topic=test-topic \
    --gen2 \
    --runtime=nodejs20 \
    --memory=512M \
    --timeout=120s \
    --region=europe-central2 \
    --source=. \
    --allow-unauthenticated
    