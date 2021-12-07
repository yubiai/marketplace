const [videoSrc , seVideoSrc] = useState("");

  const handleChange = (event) => {
    console.log(event);
    const file = event.currentTarget.files[0]
    console.log(file, "file")
    var reader = new FileReader();
    console.log(file)
    var url = URL.createObjectURL(file.originFileObj);
    seVideoSrc(url);
};

<form onSubmit={handleSubmit(onSubmit)}>
  <div className={styles.formRow}>
    <label htmlFor="video">Address</label>
    <input
          {...register("video")}
          accept="video/mp4, video/mov"
          onChange={handleChange}
          type="file"
    />
  </div>
  <button type="submit">Next</button>
  {/* a_ guardarlo en una variable b_  */}
  <Player playsInline src={videoSrc} fluid={false} width={870} height={442} />
</form>;
