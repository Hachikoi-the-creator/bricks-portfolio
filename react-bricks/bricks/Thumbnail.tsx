// Thumbnail.tsx
import React from "react";
import { types, Text, RichText, Image } from "react-bricks/frontend";
import { Button } from "react-bricks-ui/website";

const Thumbnail: types.Brick = () => {
  return (
    <div className="my-6 mx-6 p-6 text-center w-1/3 border rounded-lg shadow-xl shadow-white min-w-[300px]">
      <Image
        propName="image"
        alt="Fallback alt tag"
        maxWidth={200}
        imageClassName="mb-6"
        renderWrapper={({ children, width, height }) => (
          <div className="wrapper">{children}</div>
        )}
      />
      <Text
        propName="title"
        renderBlock={({ children }) => (
          <h1 className="text-2xl font-bold text-white">{children}</h1>
        )}
        placeholder="Type a title..."
        multiline={false} //: boolean
        softLineBreak={false} //: boolean
      />
      <RichText
        propName="desc"
        placeholder="Type a description..."
        renderBlock={({ children }) => (
          <p className="text-lg text-gray-100">{children}</p>
        )}
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Italic,
          types.RichTextFeatures.Highlight,
        ]}
        renderHighlight={({ children }) => (
          <span className="px-1 rounded bg-lime-300 text-stone-800">
            {children}
          </span>
        )}
      />
      {/* Link Buttons */}
      <div className="flex">
        <Button
          text="Source Code"
          isTargetBlank={true}
          isBigButton={false}
          href="#"
          padding="small"
        />
        <Button
          text="Live Site"
          isTargetBlank={true}
          isBigButton={false}
          href="#"
          padding="small"
          variant="sky"
        />
      </div>
    </div>
  );
};

Thumbnail.schema = {
  name: "thumbnail",
  label: "Thumbnail",
  getDefaultProps: () => ({
    title: [
      {
        type: "paragraph",
        children: [
          {
            text: "Ohayou Sekai",
          },
        ],
      },
    ],
    desc: [
      {
        type: "paragraph",
        children: [
          {
            text: "This is the best description to ever exist, if you agree, don't ever change it",
          },
        ],
      },
    ],
    image: {
      src: "https://images.reactbricks.com/original/86d64c41-a325-474d-ac8d-d8e5a2cadd3a.webp",
      placeholderSrc:
        "https://images.reactbricks.com/placeholder/86d64c41-a325-474d-ac8d-d8e5a2cadd3a.jpg",
      srcSet:
        "https://images.reactbricks.com/src_set/86d64c41-a325-474d-ac8d-d8e5a2cadd3a-400.webp 400w,\nhttps://images.reactbricks.com/src_set/86d64c41-a325-474d-ac8d-d8e5a2cadd3a-300.webp 300w,\nhttps://images.reactbricks.com/src_set/86d64c41-a325-474d-ac8d-d8e5a2cadd3a-200.webp 200w,\nhttps://images.reactbricks.com/src_set/86d64c41-a325-474d-ac8d-d8e5a2cadd3a-100.webp 100w,\nhttps://images.reactbricks.com/src_set/86d64c41-a325-474d-ac8d-d8e5a2cadd3a-50.webp 50w",
      width: 640,
      height: 434,
      alt: "Byebye",
      seoName: "",
    },
  }),
  sideEditProps: [],
};

export default Thumbnail;
