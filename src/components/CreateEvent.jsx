import { Form, useLoaderData } from "react-router-dom";

export const loader = async () => {
  const users = await fetch("http://localhost:3000/users");
  return {
    users: await users.json(),
  };
};

export const CreateEvent = () => {
  const { users } = useLoaderData();

  return (
    <Form method="post">
      <label>
        <span>Title</span>
        <input type="text" name="title" placeholder="Title" />
      </label>
      <label>
        <span>Description</span>
        <textarea name="description" placeholder="Desription" />
      </label>
      <label>
        <span>Image</span>
        <input type="text" name="URL" placeholder="ImageURL" />
      </label>
      <span>Categories</span>
      <input type="checkbox" id="sports" name="sports" value="Sports" />
      <label htmlFor="sports">Sports</label>
      <input type="checkbox" id="games" name="games" value="Games" />
      <label htmlFor="games">Games</label>
      <input
        type="checkbox"
        id="relaxation"
        name="relaxation"
        value="Relaxation"
      />
      <label htmlFor="relaxation">Relaxation</label>
      <label>
        <span>Location</span>
        <input type="text" name="location" placeholder="Location" />
      </label>
      <label>
        <span>Start Time</span>
        <input type="text" name="start-time" placeholder="Start Time" />
      </label>
      <label>
        <span>End Time</span>
        <input type="text" name="end-time" placeholder="End Time" />
      </label>
      <label>
        <span>User</span>
        <select name="userId">
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </label>
    </Form>
  );
};
