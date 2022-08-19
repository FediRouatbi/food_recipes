import React, { useRef, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { GrEdit } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
const Comment = ({ comment, deleteComm, updateComm }) => {
  const user = useSelector((state) => state.user.user);
  const textRef = useRef();
  const [edit, setEdit] = useState(false);
  const userComments = user.photoURL === comment.image;
  const update = async () => {
    await updateComm(comment._id, textRef.current.value);
    setEdit(false);
  };
  return (
    <>
      <div className=" mb-4 border border-slate-400">
        <div className="bg-gray-100 p-3 flex items-center gap-2 text-xl font-mono text-black">
          <div className="w-10 h-10  relative ">
            <Image
              src={comment.image}
              alt="user image"
              layout="fill"
              className="rounded-full"
            />
          </div>

          <div>{comment.user}</div>
          <div className="ml-auto">
            <div className="flex gap-2 items-center">
              {userComments && (
                <>
                  <TiDeleteOutline
                    className="fill-red-900 cursor-pointer"
                    onClick={deleteComm.bind(null, comment._id)}
                  />
                  <GrEdit
                    className={`cursor-pointer `}
                    onClick={() => setEdit(true)}
                  />
                </>
              )}
              {comment.createdAt.slice(0, 10)}
            </div>
          </div>
        </div>
        {edit ? (
          <input
            ref={textRef}
            className="p-4 outline-none hover:cursor-text w-full"
            type="text"
            defaultValue={comment.text}
          />
        ) : (
          <div className=" p-4"> {comment.text}</div>
        )}
      </div>
      {edit && (
        <div className="flex gap-2">
          <button className="mb-10" onClick={update}>
            Update
          </button>
          <button className="mb-10" onClick={() => setEdit(false)}>
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default Comment;
