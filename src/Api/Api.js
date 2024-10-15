import axios from 'axios';

export const apiSearch = axios.create({
    baseURL: 'https://ophim17.cc/_next/data/j4bBHnWv9JD18kNQ3njRH/',
});
export const apiFilm = axios.create({
    baseURL: 'https://ophim17.cc/_next/data/j4bBHnWv9JD18kNQ3njRH/',
});
// lọc thêm thể loại
export const apiFillterCategory = axios.create({
    baseURL: 'https://ophim17.cc/_next/data/j4bBHnWv9JD18kNQ3njRH/',
});
// carousel
export const apiCarousel = axios.create({
    baseURL: 'https://ophim17.cc/_next/data/j4bBHnWv9JD18kNQ3njRH/',
});

// lọc phim

// detailt film
export const apiDetailFilm = axios.create({
    baseURL: 'https://ophim17.cc/_next/data/j4bBHnWv9JD18kNQ3njRH/',
});

// image
// https://ophim17.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2Fapple-gui-nguoi-yeu-dau-thumb.jpg&w=192&q=75
