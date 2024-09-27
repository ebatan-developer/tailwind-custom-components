module.exports = {
  npm: {
    publish: true,
  },
  github: {
    release: true,
  },
  git: {
    requireCleanWorkingDir: false,
    addFiles: ["package.json", "CHANGELOG.md"],
    commitMessage: "chore: release ${version}",
  },
};
