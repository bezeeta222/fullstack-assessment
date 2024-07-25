module.exports = {
  apps: [
    {
      name: "my-app", // Name of the application
      script: "pnpm", // The script to execute
      args: "run start", // Arguments for the script
      interpreter: "none", // Use the system's default interpreter
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
