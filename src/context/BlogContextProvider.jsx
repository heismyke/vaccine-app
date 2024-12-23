import { useState } from 'react'
import BlogContext from './BlogContext'
import React from 'react'
const BlogContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: '8 ways to support a loved one struggling with their mental Health healthy living',
      content:
        'We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced... We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced...',
      author: 'james harden',
      upload: '../assets/blog/author1Upload.png',
      createdAt: 'Sat 21 Dec',
    },
    {
      id: 2,
      title: '8 ways to support a loved one struggling with their mental Health healthy living',
      content:
        'We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced... We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced...',
      author: 'james harden',
      upload: '../assets/blog/author2Upload.png',
      createdAt: 'Sat 21 Dec',
    },
    {
      id: 3,
      title: '8 ways to support a loved one struggling with their mental Health healthy living',
      content:
        'We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced... We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced...',
      author: 'james harden',
      upload: '../assets/blog/author3Upload.png',
      createdAt: 'Sat 21 Dec',
    },
    {
      id: 4,
      title: '8 ways to support a loved one struggling with their mental Health healthy living',
      content:
        'We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced... We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced...',
      author: 'james harden',
      upload: '../assets/blog/author4Upload.png',
      createdAt: 'Sat 21 Dec',
    },
    {
      id: 5,
      title: '8 ways to support a loved one struggling with their mental Health healthy living',
      content:
        'We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced... We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced...',
      author: 'james harden',
      upload: '../assets/blog/author5Upload.png',
      createdAt: 'Sat 21 Dec',
    },
    {
      id: 6,
      title: '8 ways to support a loved one struggling with their mental Health healthy living',
      content:
        'We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced... We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced...',
      author: 'james harden',
      upload: '../assets/blog/author6Upload.png',
      createdAt: 'Sat 21 Dec',
    },
    {
      id: 7,
      title: '8 ways to support a loved one struggling with their mental Health healthy living',
      content:
        'We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced... We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced. We guarantee you will get the best service that you have never experienced...',
      author: 'james harden',
      upload: '../assets/blog/author7Upload.png',
      createdAt: 'Sat 21 Dec',
    },
  ])
  return <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
}

export default BlogContextProvider
