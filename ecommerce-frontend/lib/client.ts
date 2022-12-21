import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client =  SanityClient({
  projectId: "oyx27zzn",
  dataset: "production",
  apiVersion: '2022-12-21',
  useCdn: true,
  token: process.env.SANITY_TOKEN,
})

const builder = ImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}