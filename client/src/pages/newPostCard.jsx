import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import {
  CheckCircleFilled,
  EllipsisOutlined,
  WechatWorkOutlined,
  RetweetOutlined,
  HeartOutlined,
  BarChartOutlined,
  BookOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const NewPostCard = ({ post, authorName }) => {
  const username = useSelector((state) => state.user?.username);
  console.log(username);

  if (!post || !post.author || !post.createdAt) {
    // Return null or an appropriate component if post data is missing or incomplete
    return null;
  }

  const {
    _id,
    content,
    author,
    likes,
    retweetCount,
    comments,
    hashtags,
    mediaAttachments,
    createdAt,
  } = post;
  const formattedDate = moment(createdAt).format("MMM D");

  console.log(mediaAttachments);

  const renderMedia = (media) => {
    return media.map((item, index) => {
      // Check if item is not null and has a type property
      if (item && item.type) {
        switch (item.type) {
          case "photo":
            return (
              <img
                key={index}
                className="rounded-2xl mt-2 w-[98%]"
                src={url}
                alt={`Image ${index + 1}`}
              />
            );
          case "video":
            return (
              <div key={index} className="w-[30rem]  mt-2">
                <video
                  controls
                  autoPlay
                  loop
                  className="w-full h-auto rounded-2xl"
                >
                  <source src={item.media_url_https} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          default:
            return null;
        }
      } else {
        return null;
      }
    });
  };

  return (
    <div className="border-b hover:bg-gray-100 transition-all cursor-pointer">
      <div className="flex p-3 mr-2">
        <div className="w-20">
          <img
            className="rounded-full"
            width={45}
            src="https://pbs.twimg.com/profile_images/1770736943707336704/OX0DcpkZ_bigger.jpg"
            alt={author.name}
          />
        </div>
        <div className="ml-2">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <span className="font-semibold">{authorName}</span>
              <span className="text-blue-500">
                <CheckCircleFilled />
              </span>
              {hashtags && Array.isArray(hashtags) && hashtags.length > 0 ? (
                <span className="text-gray-500 text-sm">
                  {hashtags.map((tag, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && ", "}
                      {tag}
                    </React.Fragment>
                  ))}
                </span>
              ) : null}
              <span className="text-gray-500 text-sm">&middot;</span>
              <span className="text-gray-500 text-sm">{formattedDate}</span>
            </div>
            <div>
              <span>
                <EllipsisOutlined />
              </span>
            </div>
          </div>
          <div className="text-gray-700 mb-3">
            <p>{content}</p>
          </div>
          {mediaAttachments &&
            mediaAttachments.map((blobUrl, index) => (
              <img
                key={index}
                className="rounded-2xl mt-2 w-[98%]"
                src={blobUrl}
                alt={`Image ${index + 1}`}
              />
            ))}
          <div className="flex justify-between items-center mt-3">
            <div className="flex gap-16">
              <div className="flex items-center gap-1 text-gray-500">
                <WechatWorkOutlined />
                <span>{comments && comments.length}</span>{" "}
                {/* Add conditional check */}
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <RetweetOutlined />
                <span>{retweetCount}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <HeartOutlined />
                <span>{likes && likes.length}</span>{" "}
                {/* Add conditional check */}
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <BarChartOutlined />
                <span>{hashtags && hashtags.length}</span>{" "}
                {/* Add conditional check */}
              </div>
            </div>
            <div className="flex gap-2">
              <BookOutlined className="text-gray-500" />
              <UploadOutlined className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostCard;
