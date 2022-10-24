import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Icon, Swiper, SwiperItem, Image, Text } from '@tarojs/components';
import { Search } from '@taroify/core';
import { MusicOutlined, Search as SearchIcon } from '@taroify/icons';

import './index.scss';
import { getBanner } from '@/api/home';

type Banner = {
  pic: string;
  bannerId: string;
};

type Nav = {
  icon: string;
  name: string;
};

interface StateType {
  keywords: string;
  bannerList: Array<Banner>;
  navList: Array<Nav>;
}
interface Index {
  state: StateType;
}
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: '123',
      bannerList: [],
      navList: [
        {
          name: '今日推荐',
          icon: 'rili'
        },
        {
          name: '私人FM',
          icon: 'diantai'
        },
        {
          name: '歌单',
          icon: 'gedan1'
        },
        {
          name: '排行榜',
          icon: 'paihangbang'
        }
      ]
    };
  }
  goSearch() {
    console.log('跳到搜索页');
    Taro.navigateTo({
      url: '/pages/search/index'
    });
  }
  onChange(val) {
    console.log(val);
  }
  getIndexBanner() {
    const params = { type: 2 };
    getBanner(params).then(res => {
      console.log(res);
      const { data } = res;
      this.setState({
        bannerList: data.banners
      });
    });
  }
  componentWillMount() {}

  componentDidMount() {
    this.getIndexBanner();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    console.log(this.state);
    const { keywords, bannerList, navList } = this.state;
    return (
      <View className="app-container">
        <View className="header">
          <Icon type="success" className="iconfont icon-menu" color="#ffffff" />
          <Search
            className="header-background"
            placeholder="输入名称搜索"
            icon={null}
            rightIcon={<SearchIcon />}
            shape="rounded"
            onFocus={this.goSearch}
            value={keywords}
          />
          <MusicOutlined size="25" color="#ffffff" />
        </View>
        <View className="home-content">
          <View className="banner">
            <Swiper indicatorColor="#999" indicatorActiveColor="#fff" indicatorDots circular>
              {bannerList.map(banner => {
                const { pic, bannerId } = banner;
                return (
                  <SwiperItem>
                    <Image className="swiper-img" src={pic} item-id={bannerId} key={bannerId} />
                  </SwiperItem>
                );
              })}
            </Swiper>
          </View>
          <View className="nav">
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
        </View>
      </View>
    );
  }
}
export default Index;
