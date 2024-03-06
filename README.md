# AI Model Hub - React Application

## Overview
AI Model Hub is a React-based web application designed for showcasing various AI models and LLMs. It provides a platform for users to explore, understand, and interact with a variety of AI models. The application includes features like model browsing, featured models, detailed exploration of individual models, a model submission interface, and a "try it out" section.

## Technology Stack
- **Framework:** React
- **Styling:** Tailwind CSS
- **Key Dependencies:**
  - `axios`: For making API requests.
  - `react-router-dom`: For application routing.
  - `react-paginate`: Pagination component.
 
## Performance Metrics

### Page Load Time

The web application's performance has been thoroughly tested using Google PageSpeed Insights, which is an industry-standard tool for web performance analysis. The results from our most recent insights report are as follows:

- **First Contentful Paint (FCP):** 0.4 seconds
- **Time to Interactive (TTI):** 1.2 seconds
- **Speed Index:** 1.0 second
- **Total Blocking Time (TBT):** 340 ms
- **Largest Contentful Paint (LCP):** 1.5 seconds
- **Cumulative Layout Shift (CLS):** 0

The First Contentful Paint (FCP) and Largest Contentful Paint (LCP) are particularly important as they denote the time taken for the first piece of content to appear on the screen and the time taken for the largest piece of content to render, respectively.

Our application received a Google PageSpeed score of:

- **Desktop:** 80


- **Optimizations Implemented:** 
  - Tailwind CSS for optimized styling.
  - Efficient data fetching and pagination using Axios.
    

## Features
- **Model Browsing:** Models displayed via a mock REST API.
- **Featured Models:** Showcasing popular or frequently used models.
- **Model Exploration Page:** Includes descriptions, use cases, and example code.
- **Model Creation:** Allows providers to submit information about their models.
- **Try it Out:** Interactive section for hands-on model testing.
- **Curated Models** User can Star a model and see them in curated models.

## Code Quality
- Adheres to React best practices.
- Code is clear and well-structured.
- Effective use of React hooks and state management.

## Deployment
- **Deployed at:** [vercel](https://ai-model-hub-aaaa760.vercel.app/)
- **Express Server for Mock Data:** [vercel](https://vercel.com/aaaa760/ai-model-backend/BfwSDmGkcjBEp2b4ZmDj82pqr4Mi)
- **Deployment Platform:** Vercel

## Repository
- **Hosted on:** [Github](https://github.com/aaaa760/ai-model-hub)



