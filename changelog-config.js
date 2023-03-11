module.exports = {
  writerOpts: {
    transform: (commit, context) => {
      if (commit.type === "feat") {
        // 这里稍微改动一下
        commit.type = "😌-测试  Features";
      }

      return commit;
    },
  },
};
