# GitHub Rate Limit Webtask

## What is this?

If you work with the [GitHub API](https://developer.github.com/v3/), knowing your rate limit is important. You have 5000 requests per hour using a personal token and you can't breach that limit.

So, I have my script to call the API and check my rate limit but sometimes I don't have it with me. That's why I created a **Webtask** from https://webtask.io/ to solve this. 

My script is exposed via URL and I can use it to monitor my rate limit anytime. Or I could use an API monitoring tool that constantly checks the limit and notifies me if the value reaches a specific limit.

## How can I use it?

Follow these steps:

1. Go to https://webtask.io/ and sign-up for a free account.
2. Follow the steps to install Webtask globally in your machine.
3. Execute the following command to create a Webtask in your container. Replace the placeholder with your GitHub token.

   ````
   wt create https://raw.githubusercontent.com/Verlic/Ratelimit-task/master/src/ratelimit-task.js --name ratelimit-task --secret ACCESS_TOKEN="{your-github-token}"
   ````

4. After the execution is completed, an URL is returned to you. You can use it to read your rate limit.
5. Enjoy!
