import { Form, useLoaderData, redirect } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const newEventId = await fetch("http://localhost:3000/events", {
    method: "post",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => json.id);
  return redirect(`/event/${newEventId}`);
};

export const loader = async () => {
  const users = await fetch("http://localhost:3000/users");
  return {
    users: await users.json(),
  };
};

export const CreateEvent = () => {
  const { users } = useLoaderData();

  return (
    <div className="new-event">
      <h1>Add Event</h1>
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
        <button type="submit">Add event</button>
      </Form>
    </div>
  );
};
