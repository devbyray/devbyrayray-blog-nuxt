export default async () => {
  const {  } = require("@nuxt/content");
  const files = await $content({ deep: true }).only(["path"]).fetch();

  return files.map((file) => (file.path === "/index" ? "/" : file.path));
};