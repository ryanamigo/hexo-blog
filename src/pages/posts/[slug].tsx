
function PostPage() {

  return (
    <div>
      post page
    </div>
  )
}

export default PostPage

export async function getServerSideProps() {
  return {
    props: {
      a: '12321'
    }
  }
}