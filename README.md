# DocuSite || MkDocs with Vercel

## Bring your documentation online in minutes for free

* Easy setup and works right out of the box.
* No project file configuration required to get started.
* Optional password protection for page content.
* 100% free.

<img width="1138" alt="Screen Shot 2024-09-11 at 01 43 25" src="https://github.com/user-attachments/assets/68f0f167-32e9-4e8f-b55b-5a7c0c91a00a">

## Instructions

The `Site` directory will always be overwritten when `mkdocs build` runs. You never need to touch that file.

### Public Repo Setup

1] Fork the repository. 
<br>

2] Sign into [Vercel](https://vercel.com) with your GitHub account. Add vercel permissions to the forked repository.
<br>

3] Deploy the repository on Vercel. Check that the generated URL works.
<br>

4] Jump straight into editing the markdown files inside of GitHub.
<br>

### Private Repo Setup (Linux & MacOS)

1] On your personal Github profile, create a new empty private repository.
<br>

2] Clone the DocuSite repository 
```
git clone --bare https://github.com/Garrett96/docusite/
```

3] Mirror-push the cloned repository to the empty private repo created in step #1 
```
cd docusite.git 
git push --mirror https://github.com/your-username/new-private-repo.git
```

4] Delete the cloned DocuSite repository since you don't need it anymore 
```
cd ..
rm -rf original-repository.git
```

5] Clone your new private repo created in Step #1 
```
git clone https://github.com/your-username/new-private-repo.git
```

6] Sign into [Vercel](https://vercel.com) with your GitHub account. Add vercel permissions to your private repo & then deploy on Vercel.
<br>

7] (*Optional*) If you would like to keep the private repository open to future downstream changes:
```
git remote add upstream https://github.com/original-owner/original-repository.git
git remote set-url --push upstream DISABLE
```

### Private Repo Setup (Windows)

-----

### Optional Setup

A] Clone the Repo with GitHub Desktop and open with your preferred IDE for a more comfortable experience editing content and adding image assets.
<br>

B] In `mkdocs.yml` uncomment password plugin and set a global password.

## Legal Information

- **DocuSite**: Licensed under the MIT License.
- **MkDocs**: Licensed under the BSD-2-Clause License.
- **Vercel**: [Terms of Service](https://vercel.com/legal/terms)
