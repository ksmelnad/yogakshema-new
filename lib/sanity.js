import createImageUrlBuilder from "@sanity/image-url";
// import { createPreviewSubscriptionHook } from "next-sanity";
import { definePreview } from "next-sanity/preview";
import { sanityConfig } from "./config";
import { sanityClient } from "@sanity/client";

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source) =>
  imageBuilder.image(source).auto("format").fit("max");

// This is v1
// export const usePreviewSubscription =
//   createPreviewSubscriptionHook(sanityConfig);

// export const usePreview = definePreview(sanityConfig);

// const usePreview = definePreview(sanityConfig);

// export function PreviewDocumentsCount() {
//   const data = usePreview(null, query);
//   return <DocumentsCount data={data} />;
// }

// export const client = sanityClient(sanityConfig);
