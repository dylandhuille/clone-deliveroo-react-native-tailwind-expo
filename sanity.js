import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = SanityClient({
    projectId: "kxz12er7",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
});
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);


export default client;