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
  plugins: {
    "@release-it/conventional-changelog": {
      preset: "angular",
      infile: "CHANGELOG.md",
    },
  },
};
