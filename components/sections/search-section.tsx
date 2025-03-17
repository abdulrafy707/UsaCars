import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchSection() {
  return (
    <section className="py-8 bg-white">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative col-span-1 md:col-span-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input className="pl-10" placeholder="Enter lot, VIN, keywords" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Any Make" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="toyota">Toyota</SelectItem>
                <SelectItem value="honda">Honda</SelectItem>
                <SelectItem value="ford">Ford</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Any Model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="camry">Camry</SelectItem>
                <SelectItem value="civic">Civic</SelectItem>
                <SelectItem value="f150">F-150</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end">
            <Link href="#" className="text-sm text-yellow-500 hover:underline">
              Advanced Search
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="From" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="To" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Min Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5000">$5,000</SelectItem>
                <SelectItem value="10000">$10,000</SelectItem>
                <SelectItem value="15000">$15,000</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Max Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="20000">$20,000</SelectItem>
                <SelectItem value="30000">$30,000</SelectItem>
                <SelectItem value="40000">$40,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="copart" className="w-4 h-4 accent-yellow-400" />
              <label htmlFor="copart" className="text-sm">
                Copart
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="iaai" className="w-4 h-4 accent-yellow-400" />
              <label htmlFor="iaai" className="text-sm">
                IAAI
              </label>
            </div>
          </div>
          <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">Search</Button>
        </div>
      </div>
    </section>
  )
}

