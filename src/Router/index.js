//
import { Home, Film, DetailtFilm, Movie, FillterCategory, WatchMovie, NotFound } from '../Page';
import OnlyLayout from '../Layout/OnlyLayout';
export const pulicbRouter = [
    {
        path: '/',
        comment: Home,
    },
    {
        path: '/film',
        comment: Film,
    },
    {
        path: '/detailt-film/:url',
        comment: DetailtFilm,
    },
    {
        path: '/movie/:slug',
        comment: Movie,
    },
    {
        path: '/fillter-category/:slug',
        comment: FillterCategory,
    },
    {
        path: '/watch-a-movie/:url',
        comment: WatchMovie,
        Layout: OnlyLayout,
    },
    {
        path: '*',
        comment: NotFound,
    },
];
