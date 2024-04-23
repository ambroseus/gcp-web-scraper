gcloud functions deploy api \
    --entry-point=api \
    --trigger-http \
    --gen2 \
    --runtime=nodejs20 \
    --memory=512M \
    --timeout=30s \
    --region=europe-central2 \
    --source=. \
    --allow-unauthenticated
    