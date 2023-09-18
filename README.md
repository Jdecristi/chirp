<p align="center">
  <img src="https://github.com/Jdecristi/chirp/assets/89173284/1ce155ed-ab5e-4f05-ae0d-7f555ad5f104" alt="chirp-banner" width="800px">
</p>

---

<h1>About the project</h1>
This project is using the <a href="https://github.com/t3-oss/create-t3-app#about">T3 Stack</a> under the hood. Therefore we will be using most of the recomended technologies with a few twaks

This is based on <a href="https://github.com/t3dotgg">Theo's</a> t3 tutorial. <a href="https://youtu.be/YkOSUVzOAA4">Here</a> is the link to the original video.

<h3>Our Stack</h3>
<ul>
  <li><a href="https://nextjs.org">Next.js v13</a></li>
  <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  <li><a href="https://www.prisma.io/">Prisma</a></li>
  <li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
  <li><a href="https://clerk.dev/">Clerk</a></li>
  <li><a href="https://planetscale.com/">Planetscale</a></li>
  <li><a href="https://upstash.com/">Upstash</a></li>
</ul>

<h1>Getting started</h1>

<h3>Prerequisites</h3>

<h3>Make you sure you have these install before forking the repo</h4>
<ul>
  <li><a href="https://nodejs.org">Node v18</a></li>
  <li><a href="https://io">pnpm</a></li>
</ul>

<h3>Setting up Clerk for authentication</h3>
Make sure you have a <a href="https://clerk.dev/">Clerk</a> account set up with atleast "Google" and "Github" OAuth setup. <a href="https://www.youtube.com/watch?v=u8zOxeFN36o">Here</a> is a video link to if your having trouble setting getting started with Next.js

> NOTE: This code base does not support anything other than "Google" and "Github" OAuth. If you wish to provide others forms authentication, that is OK as long as you don't push code specific to that into this repository.

<h3>Setting up Planetscale for DB</h3>
Make sure you have a <a href="https://planetscale.com/">Planetscale</a> account set up. <a href="https://www.youtube.com/watch?v=i2Zh8LckotU&t=298s">Here</a> is a video link to if your having trouble setting up an account

> NOTE: This code base only supports Planetscale. If you want to use another DB like Postgres or MongoDB, feel free just do not push to this codebase.

<h3>Setting up Upstash for Ratelimiting</h3>
Make sure you have a <a href="https://upstash.com/">Upstash</a> account set up. <a href="https://youtu.be/YkOSUVzOAA4?t=5880">Here</a> is a video link to if your having trouble setting up an account

> NOTE: This code base only supports upstash for rate limiting. If you wish to use another, go ahead but please do not push to this repo

<h3>Forking the repo</h3>

<p align="center">
  <img src="https://github.com/Jdecristi/chirp/assets/89173284/f8c0dfb3-be25-4740-9626-6074bd6b14d4" alt="chirp-fork" />
</p>

<h3>Installation & Running locally</h3>
After forking the repo you'll want to get it up and running on your local machine. First step setting up your ENV variables. Copy the files and fill in the respective keys from Clerk, Planetscale, and Upstah respectively.

    cp ./env.example ./env

Next, you'll installing the node packages using pnpm

    pnpm install

    pnpm dev

<h1>Deploying</h1>
If you choose to use this as a personal project on your resume, we recomend deploying it yourself with your own Authentication and DB instance. For this we recomend <a href="https://vercel.com">Vercel</a>. <a href="https://www.youtube.com/watch?v=zRJcQ9PFSHE">Here</a> is a video to help walk you through deploying on vercel.
