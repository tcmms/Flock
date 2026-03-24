#!/usr/bin/env bash
set -e

# Find a free port
PORT=8788
while lsof -i TCP:"$PORT" &>/dev/null; do
  PORT=$((PORT + 1))
done

# Go to the folder where this script lives
cd "$(dirname "$0")"

echo "Starting Flock DS Storybook on http://localhost:$PORT"
echo "Press Ctrl+C to stop."

# Open browser after a short delay
(sleep 1 && open "http://localhost:$PORT") &

# Start server
python3 -m http.server "$PORT"
