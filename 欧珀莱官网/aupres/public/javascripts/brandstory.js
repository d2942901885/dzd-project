$(function () {

      //参考列数
      var col = 3;

      //每一列的宽度
      var height = 400;

      //间隙
      var space = 20;

      //基础路径
      var baseUrl = 'images/';
	  var width;
      //所有图片
      var data = [
        {img: 't1.jpg'},
        {img: 't2.jpg'},
        {img: 't3.jpg'},
        {img: 't4.jpg'},
        {img: 't5.jpg'},
        {img: 't6.jpg'},
        {img: 't7.jpg'},
        {img: 't8.jpg'},
        {img: 't9.jpg'},
        {img: 't10.jpg'},
        {img: 't11.jpg'},
        {img: 't12.jpg'}
      ]


      //遍历生成图片
      $.each(data, function () {
        console.log('this ==> ', this);
        //创建div
        var $div = $(`<div>
              <img class="auto-img" src="${baseUrl + this.img}" alt="">
            </div>`);
        
        $('.waterfall').append($div);

      })

      //监听图片是否加载完成
      var count = 0;
      $('img').on('load', function () {

        //每加载完成一张图，count累加1
        count++;

        //判断全部图片是否加载完成
        if (count == data.length) {
          console.log('全部图片已经加载完成');

          var $divs = $('.waterfall>div');
          // console.log('$divs ==> ', $divs);

          //第一行的参考高度
          var heights = [];

          $divs.each(function (i) {
            //获取当前div的高度
            var currentHeight = $(this).height();
            console.log('currentHeight ==> ', currentHeight);

            if (i < col) {
              //第一行
              //参考列
              $(this).css({
                top: '0px',
                left: (width + space) * i + 'px'
              })

              //保存当前div的高度
              heights.push(currentHeight + space);

            } else {
              //查找最小的高度
              var minHeight = Math.min.apply(Math, heights);
              // console.log('minHeight ==> ', minHeight);

              //获取最小高度在heights数组的位置
              var index = heights.indexOf(minHeight);

              //设置当前div的left，top
              $(this).css({
                top: minHeight + 'px',
                left: index * (width + space) + 'px'
              })

              //重置heights[index]的高度
              heights[index] = minHeight + (currentHeight + space);
              
            }
          })

          // console.log('heights ==> ', heights);

        }
      })

    })