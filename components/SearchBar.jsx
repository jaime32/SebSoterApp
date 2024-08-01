import Searchbar from '../shared/SearchBar'
export default function Home() {
    const [value, setValue] = useState()
    function updateSearch(value) {
        //do your search logic or anything
        console.log(value)
    }
    return (

        <View style={styles.container}>
            <View style={{ height: '20%', backgroundColor: "#3F569C", borderRadius: 10, }}>
              
                <Searchbar
                    value={value}
                    updateSearch={updateSearch}
                    style={{ marginTop: '8%' }}
                />
            </View>

        </View>
    )
}