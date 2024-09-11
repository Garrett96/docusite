# DocuSite

## Documentation Website Build Tool || MkDocs with Vercel

* Bring documentation online in minutes, for free.
* Works right out of the box. No configuration required to get started.
* No site builder required.
* No need to download anything.
* Optional password protection for page content.

## Set Up

1] Fork the repository 
<br>
2] Sign into [Vercel](https://vercel.com) with your GitHub account. Add vercel permissions to the forked repository.
<br>
3] Deploy the repository on Vercel.
<br>
4] If the Vercel URL works, you can jump straight into editing the content right inside of GitHub. 

### (Optional set up)
5] Clone the Repo with GitHub Desktop and open with your preferred IDE for a more comfortable experience editing content and adding image assets.
<br>
6] In `mkdocs.yml` uncomment password plugin and set a global password.

## Notes

The `Site` directory will always be overwritten when `mkdocs build` runs. To ensure you save time and sanity, always adjust the content in the `Docs` directory; especially when adding image assets.

## Use Cases & Dependencies

Ideal for small-to-medium businessse that just need something that works really quickly and for free. Works great for specific projects with lots of stakeholders or gritty details. Potential use case for educators or administrative staff.
<br><br>
Works best if it lives on GitHub, although this isn't strictly necessary. Updates regarding security or other politices from MkDocs, Vercel, and GitHub are considerations for longevity and any security concerns.

## Password Protection Disclosure Statement

The password protection guards the main contents of pages. The option is there to keep anyone anywhere from being able to read everything, which is good enough for most use cases. It's not suitable for anything related to national security or corporate trade secrets, but it works.  
