/**
 * Created by Zhaoxiang Wang on 2020/4/21.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' // 引入背景音乐文件


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2019, 4, 22) // 你们的纪念日
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 2500) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 200)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>我们已经一起走过了: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <h1 style={{ fontWeight: 900 }}>申铭同学，你好：</h1>
                    <p >  见字如晤。</p>
                    <p>  掐着日子算算，今天就是我们在一起的一周年了。去年的这个时候，重庆30度的热风吹得人昏沉，沿着嘉陵江边的盘山公路俯瞰整个重庆城，有一种异样的熟悉的感觉。你站在南开校园的夕阳里，对我说，“欢迎走进我的回忆。”我没经历过，但我懂。</p>
                    <p>  山城的啤酒真上头啊。两瓶国宾下肚，让人忘掉了要面对的困难、要承受的非议、还有所有的犹豫。烟雨路118号的洞子火锅店里，我说，“做我女朋友吧。”高架桥下昏黄的路灯映在每个人脸上，火锅店里人声喧闹，生长在山城的人们豪气地碰着酒杯，叮叮当当。我想你也没有意识到当时短暂的沉默，滚烫的红油咕噜咕噜地翻腾，氤氲的热气中，少女的呆滞和脸红胜过所有的回答。
                </p>
                    <p>
                </p>
                    <p>  回看这一年，磕磕绊绊地经历了很多事情。我们努力地去做好当时我们想做的每件事，那些即使不再谈起，永远也不会忘却的事情。我们有过矛盾，有过争执，也曾一起为了幼稚而偏执的想法，恶狠狠地向别人展示身上的刺，像舟楫上的同行之人，是恋人，也是相互支撑的朋友。
                </p>
                    <p>  子健评价石璐的时候说，“如果没有遇到石璐，我就活成另一个赵子健了。”如果哪天在朋友间谈起你，我也会说出同样的话。谢谢你在我前20年人生中最艰难的时刻依然陪在我身边，谢谢你在我最需要拥抱的时候毫不犹豫地拥抱我。
                </p>
                     <p>
                </p>
                      <p>  你喜欢军人，觉得保家卫国是最帅的事儿。可我时常慵懒而自傲，说自己是“不辞辛苦出山林”，但是不敢提前半句。你说我现在越来越像一个传统的工科生了，每天就关注技术和算法的事儿，我知道，每个女孩都是喜欢浪漫的。三月初的时候你说，“给我写封信吧。”我记下了，但我说，“邮局还没复工呢。
                </p>
                     <p>  其实我早就写好了，只是一直在找一个机会送到你眼前。
                </p>
                     <p>
                </p>
                     <p>  真是一个难熬的春天啊。好在快开学了，期待下次见面，能给你一个大大的拥抱。和你在一起的每一天，都更接近我想象中的未来。再给我一点时间，让我成长到能够兑现一起描绘的未来。一周年快乐。
                </p>
                    <p>  纸短情长。</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>王兆祥</p>
                        <p>2020年4月22日</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main