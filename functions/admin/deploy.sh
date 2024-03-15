gcloud run deploy admin \
    --project web-scraper-dev \
    --image gcr.io/web-scraper-dev/admin \
    --platform managed \
    --region europe-central2 \
    --allow-unauthenticated
