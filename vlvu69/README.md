# Astro Starter Kit: Basics

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 📚 Learning Resources

- [Astro Documentation](https://docs.astro.build) - Learn more about Astro features and API.

## Keep in mind
- เขียน component ใน `src/components/`

## How we work
1. สร้าง branch ใหม่จาก main เพื่อพัฒนาฟีเจอร์หรือแก้ไขอะไรใด ๆ ตั้งชื่อเป็น `ชื่อ/<task>/<รายละเอียดสั้น ๆ>`
2. พัฒนาใน branch ที่สร้างขึ้นมา
3. เมื่อพัฒนาเสร็จแล้ว ให้สร้าง Pull Request (PR) เข้ามาที่ repo นี้ (กูเกิลวิธีการได้เลยสู้ ๆ จั๊ฟ)
4. ใส่ชื่อ Pull request เป็นสรุปสั้น ๆ ว่าเกี่ยวกับอะไร
5. ใส่รายละเอียดใน description ว่าได้ทำอะไรไปบ้าง
6. เพิ่ม Reviewers เป็น `ptsgrn`
7. รอการรีวิวโค้ดและอนุมัติจาก ptsgrn ซึ่งจะ merge ให้หลังจากอนุมัติแล้ว
