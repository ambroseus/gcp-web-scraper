gcloud functions deploy {function-name} \
    --entry-point=handler \
    --trigger-http \
    --gen2 \
    --runtime=nodejs20 \
    --memory=512M \
    --timeout=60s \
    --region=europe-central2 \
    --source=. \
    --allow-unauthenticated
    