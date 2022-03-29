function HomePage() {
  return (
    <div>
      <p>{`Welcome to ${process.env.NEXT_PUBLIC_SOME_ENV_VAR}`}</p>
      <p>{`on the ${process.env.branch} branch`}</p>
    </div>
  );
}


export default HomePage