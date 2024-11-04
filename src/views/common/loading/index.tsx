function Loading() {
  useEffect(() => {
    console.log('加载 Loading')

    return () => {
      console.log('卸载 Loading')
    }
  }, [])

  return (
    <>
      <p>hello word</p>
    </>
  )
}

export default Loading
