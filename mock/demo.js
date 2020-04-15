/**
 * 请不要删除掉这个文件，否则你将看不到自动生成后的效果
 */

module.exports = [
  {
    api: '/api/demo/list',
    response: function (req, res) {
      res.send({
        data: [
          {
            id: 1,
            name: "王小虎",
            photo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1228590978,607538109&fm=27&gp=0.jpg',
          },
          {
            id: 2,
            name: "孙小猫",
            photo: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=737452706,3927719630&fm=27&gp=0.jpg',
          },
          {
            id: 3,
            name: "杜小熊",
            photo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3970946287,4216919482&fm=27&gp=0.jpg',
          },
          {
            id: 4,
            name: "黄小豹",
            photo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2526496207,1336101966&fm=27&gp=0.jpg',
          },
          {
            id: 5,
            name: "吴小狗",
            photo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2439079329,3191281322&fm=27&gp=0.jpg',
          }
        ],
        page: {
          total: 5
        }
      });
    }
  },
  {
    api: '/api/demo/save',
    response: function (req, res) {
      res.send({});
    }
  },
  {
    api: '/api/demo/detail',
    response: function (req, res) {
      res.send({
        id: 1,
        name: "王小虎",
        photo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1228590978,607538109&fm=27&gp=0.jpg',
      });
    }
  },
  {
    api: '/api/demo/delete',
    response: function (req, res) {
      res.send({});
    }
  }
]