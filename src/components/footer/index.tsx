import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Icon, Text } from '@tarojs/components';

import './index.scss';
// import { getBanner } from '@/api/index'

type Nav = {
  icon: string;
  name: string;
  link: string;
};

interface StateType {
  navList: Array<Nav>;
}
interface Index {
  state: StateType;
}
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: [
        {
          name: '发现',
          icon: '',
          link: 'index'
        },
        {
          name: '播客',
          icon: '',
          link: 'index'
        },
        {
          name: '音乐',
          icon: '',
          link: 'index'
        },
        {
          name: '我的',
          icon: '',
          link: 'index'
        },
        {
          name: '云村',
          icon: '',
          link: 'index'
        }
      ]
    };
  }
  goTo(navItem) {
    console.log('跳到搜索页');
    const { link } = navItem;
    Taro.navigateTo({
      url: `/pages/${link}/index`
    });
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    console.log(this.state);
    const { navList } = this.state;
    return (
      <View className="footer-wrapper">
        {navList.map(nav => {
          const { icon, name } = nav;
          return (
            <View className="nav-item">
              <View className="nav-item-icon">
                <Icon type="success" className={`iconfont icon-${icon}`} />
              </View>
              <View className="nav-item-text">
                <Text>{name}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
export default Index;
