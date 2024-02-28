import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';

import { useRef } from 'react';

import { useState } from 'react';
const songs = [

    {img:'/liliroseshop/images/olive.jpg', title: 'Le régime Méditéranéen , C\'est quoi?', artist: 'C\'est quoi?', album: 'C\'est quoi?', src: '/liliroseshop/audios/r0.mp3' },
    {img:'/liliroseshop/images/tomate.jpg', title: 'Pr Gilbert Deray: Capital santé  ',  artist: 'Capital santé ', album: 'Capital santé ',  src: '/liliroseshop/audios/r1.mp3' },
    {img:'/liliroseshop/images/orange.jpg', title: 'Dr Guillaume Fond : enquête santé',artist:' enquête santé', album: 'enquête santé',  src: '/liliroseshop/audios/r2.mp3' },
    { 
        img:'/liliroseshop/images/noix.jpg',
        title: 'Le régime Méditéranéen, Menu et recettes',
        artist: 'Menu et recettes',
        album: 'Menu et recettes',
        src: '/liliroseshop/audios/r3.mp3' 
      }

    // Add more songs as needed
  ];

const WallPaper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',

  // top: ({ theme }) => theme.breakpoints.up('sm') ? '80px' : theme.breakpoints.up('md') ? '65px' : 0,

  top:'80px',
  left: 0,
  overflow: 'hidden',
//   background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
background: ({ theme }) => theme.palette.mode === 'dark' ?
    'linear-gradient(rgb(28, 11, 72) 0%, rgb(11, 6, 39) 100%)' : // Fond sombre en mode sombre
    'linear-gradient(rgb(255, 230, 238) 0%, rgb(231, 233, 255) 100%)', // Fond clair en mode normal
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
  zIndex: 0, // Définir un z-index inférieur

  '&::before': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    // top: '-40%',
    right: '-50%',
    // background:
    //   'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
    background:
    'radial-gradient(at center center, rgb(238, 204, 207) 0%, rgba(238, 204, 207, 0) 64%)', // Rose clair
  },
  '&::after': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    bottom: '-50%',
    left: '-30%',
    // background:
    //   'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
    background:
    'radial-gradient(at center center, rgb(207, 204, 238) 0%, rgba(207, 204, 238, 0) 70%)', // Violet clair
  transform: 'rotate(30deg)',
    
  },
});

const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});









export default function MusicPlayerSlider() {
  const theme = useTheme();
//   const duration = 200; // seconds
  const [duration, setDuration] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const [paused, setPaused] = React.useState(true);
  const [volume, setVolume] = React.useState(0.3); // Initialiser le volume à 0.3
  
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = React.useRef(null);






  React.useEffect(() => {
    const audio = audioRef.current;

      // Mettre à jour la durée totale du son
      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };

    // Mettre à jour la position du son lorsque l'audio progresse
    const handleTimeUpdate = () => {
      setPosition(audio.currentTime);
    };

    // Mettre à jour l'état de pause en fonction de la lecture/pause de l'audio
    const handlePlayPause = () => {
      if (audio.paused) {
        setPaused(true);
      } else {
        setPaused(false);
      }
    };

    // Ajouter des écouteurs d'événements à l'audio
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlayPause);
    audio.addEventListener('pause', handlePlayPause);

    // Nettoyer les écouteurs d'événements lors du démontage du composant
    return () => {
    
    audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlayPause);
      audio.removeEventListener('pause', handlePlayPause);
    };
  }, []);





  function handlePlayPause() {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setPaused(false);
    } else {
      audioRef.current.pause();
      setPaused(true);
    }
  }


  function handleBack() {
    const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(newIndex);
    setPosition(0); // Reset position when changing songs

    

  }

  function handleForward() {
    const newIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(newIndex);
    setPosition(0); // Reset position when changing songs

   

  }






  




  function handleVolumeChange(event, newValue) {
    setVolume(newValue);
    audioRef.current.volume = newValue; // Mettre à jour le volume de l'audio
  }

  function handleSliderChange(event, newValue) {
    setPosition(newValue);
    audioRef.current.currentTime = newValue;
  }


  function formatDuration(value) {
    // const minute = Math.floor(value / 60);
    // const secondLeft = value - minute * 60;
    // return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;



    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // const sign = value < 0 ? '-' : ''; // Ajoute le signe "-" si la valeur est négative
    // return `${sign}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';











  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Widget>


  {/* Lecteur audio */}
  <audio ref={audioRef} src={songs[currentSongIndex].src} />


        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CoverImage>
            <img
              alt="can't win - Chilling Sunday"
              src={songs[currentSongIndex].img}
            />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography variant="caption" color="text.secondary" fontWeight={500}>
            {songs[currentSongIndex].artist}

            </Typography>
            <Typography noWrap>
            <b>{songs[currentSongIndex].title}</b>
            </Typography>
            <Typography noWrap letterSpacing={-0.25}>
            {songs[currentSongIndex].album} — {songs[currentSongIndex].title}
            </Typography>
          </Box>
        </Box>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}

          onChange={handleSliderChange}


          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&::before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
            px: 1, // Ajout de padding pour aligner les chiffres avec la barre de progression

          }}
        >
          <TinyText>{formatDuration(Math.abs(position))}</TinyText>
        <TinyText>{formatDuration(Math.abs(duration - position))}</TinyText>

        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -1,
          }}
        >
          <IconButton aria-label="previous song" onClick={handleBack}>
            <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
          <IconButton
            aria-label={paused ? 'play' : 'pause'}
            onClick={handlePlayPause}
          >
            {paused ? (
              <PlayArrowRounded
                sx={{ fontSize: '3rem' }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
            )}
          </IconButton>
          <IconButton aria-label="next song" onClick={handleForward}>
            <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
        </Box>
        <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
          <VolumeDownRounded htmlColor={lightIconColor} />
          <Slider
            aria-label="Volume"
            // defaultValue={30}
            value={volume}
            onChange={handleVolumeChange}
            min={0}
            max={1}
            step={0.01}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              '& .MuiSlider-track': {
                border: 'none',
              },
              '& .MuiSlider-thumb': {
                width: 24,
                height: 24,
                backgroundColor: '#fff',
                '&::before': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                  boxShadow: 'none',
                },
              },
            }}
          />
          <VolumeUpRounded htmlColor={lightIconColor} />
        </Stack>
      </Widget>
      <WallPaper />
    </Box>
  );
}