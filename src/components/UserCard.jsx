import React from "react";

const UserCard = ({ user }) => {
  // Receiving user props
  const { firstName, lastName, photoUrl, gender, age, about } = user;

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt={`${firstName}'s photo`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        {gender && age && <p>{`${gender}, ${age}`}</p>}
        {about && <p>{about}</p>}
        <div className="card-actions justify-center">
          <button className="btn btn-secondary">Interested</button>
          <button className="btn btn-primary">Ignore</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
