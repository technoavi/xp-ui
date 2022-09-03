import React from "react";
import {
  Player,
  PosterImage,
  ControlBar,
  PlayToggle,
  BigPlayButton,
  LoadingSpinner,
  ReplayControl,
  ForwardControl,
  VolumeMenuButton,
  PlaybackRateMenuButton
} from "video-react";

import Modal from "react-responsive-modal";
import "../../../node_modules/video-react/dist/video-react.css"
export default function ReactPlayer(props) {
  const { open, toggleModal } = props;
  return (
    <Modal
      open={open}
      onClose={toggleModal}
      styles={{
        modal: {
          maxWidth: "unset",
          width: "90%",
          padding: "unset"
        },
        overlay: {
          background: "rgba(0, 0, 0, 0.5)"
        },
        closeButton: {
          background: "yellow"
        }
      }}
      center
    >
      <Player
         src={"https://images.all-free-download.com/footage_preview/mp4/satellite_with_its_orbit_around_earth_6892430.mp4"}
        startTime={900}
      >
        <BigPlayButton position="center" />
        <LoadingSpinner />
        <ControlBar autoHide={false} disableDefaultControls={false}>
          <PlayToggle />
          <VolumeMenuButton vertical />
          <ReplayControl seconds={10} order={2.2} />
          <ForwardControl seconds={10} order={3.2} />
          <PlaybackRateMenuButton rates={[2, 1.5, 1, 0.5, 0.1]} />
        </ControlBar>
      </Player>
    </Modal>
  );
}
