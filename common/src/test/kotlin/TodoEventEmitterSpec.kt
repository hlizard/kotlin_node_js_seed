import org.spekframework.spek2.Spek
import org.spekframework.spek2.style.specification.describe
import kotlin.test.assertEquals

class TodoEventEmitterSpec : Spek({

    describe("A calculator") {

        describe("addition") {
            it("returns the sum of its arguments") {
                assertEquals(1, 2)
            }
        }
    }
})
