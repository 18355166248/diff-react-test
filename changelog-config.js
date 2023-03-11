module.exports = {
  writerOpts: {
    transform: (commit, context) => {
      if (commit.type === "feat") {
        // 这里稍微改动一下
        commit.type = "😌  Features";
      }

      return commit;
    },
  },
};
