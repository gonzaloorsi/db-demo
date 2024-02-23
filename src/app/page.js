"use client";

export default function Home() {
  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name </label>
      <input id="name" />
      <label htmlFor="email">Email</label>
      <input id="email" />
      <button type="submit" />
    </form>
  );
}
