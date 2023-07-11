import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "bm7has18", //import.meta.env.VITE_PROJECT_ID,
  dataset: "production",
  appVersion: "2023-07-11",
  token:
    "sk9eBvPPCIAeGczLKhThQyqrd2rr7MdV5Km8DL0c2dUT24ftBlHBf0hl5LmvD7BOVg3qC1GpU6gUnZSLb9aJCpkkRJtOE46GnTWxhRvClTzIodE4EJJsQnAsxosCozZ5VmF253KS543KXMkE4HPsmn3bV0zWYEUL6lcAx7kjBLMlhGugKN0F", //import.meta.env.VITE_PROJECT_TOKEN,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
