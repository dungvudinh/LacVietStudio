import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import styles from './NewsDetail.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const newsBody = `
We're honored by the increasing number of projects launched to improve the performance of Bambu Lab printers. Everyone appreciates a thriving ecosystem where diverse individuals and companies collaborate to enhance a product.

As a young company that has just completed the first round of our product launches, with X1, P1, and A1 representing the Gen. 1 of the Bambu Lab family, we acknowledge that our hardware and software infrastructures are still in the early stages of development. SDK is not complete and desired stability of our API has yet to be attained.

The discovery of the X1 Plus firmware and subsequent email exchanges have prompted us to prioritize our ecosystem infrastructure. But this will take quite some time to be beta tested and launched. Nevertheless, we started everything by collaborating with the X1 Plus team to roll out the Third Party Firmware plan to give our users the freedom of choice.
For the past two months, Bambu Lab and X1 Plus have been working closely together to make everything happen. X1 owners can install the Official Rootable Firmware (also known as Firmware R) on their printers, as well as X1 Plus. `;

function NewsDetail() {
  const news = {
    title: "Custom Firmware Plan and Our Principles on Ecosystem",
    author: {
      name: "John Doe",
      image: "https://via.placeholder.com/50",
      postDate: "October 10, 2023"
    },
    content: {
      image: "https://via.placeholder.com/800x400",
      text: newsBody
    }
  };

  const paragraphs = news.content.text.split('\n').map((line, index) => (
    <Typography key={index} variant="body1" sx={{ fontSize: '1.7rem', lineHeight: '1.8', marginBottom: '20px !important' }}>
      {line}
    </Typography>
  ));

  return (
    <div className={cx('news-wrapper', 'container')}>
      <Box className={cx('news-detail')}>
        <Typography variant="h3" component="h3" gutterBottom fontWeight={800} sx={{ padding: '0 200px' }}>
          {news.title}
        </Typography>
        <Box className={cx('author-profile')}>
          <Avatar src={news.author.image} sx={{ marginRight: '10px', width: '50px', height: '50px' }} />
          <Box>
            <Typography variant="body1">{news.author.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {news.author.postDate}
            </Typography>
          </Box>
        </Box>
        <Box className={cx('news-content')}>
          <img src='https://blog.bambulab.com/content/images/size/w1200/2024/07/img_v3_02cj_654bcdd5-1289-4c8c-9345-52b54844663g.png' alt="News" className={cx('news-image')} />
          <Box className={cx('news-content_body')}>
            {paragraphs}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default NewsDetail;