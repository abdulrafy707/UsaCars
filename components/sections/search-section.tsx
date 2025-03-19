"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SearchSection() {
  return (
    <section className="w-full py-12 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <Card className="border-0 shadow-md rounded-xl overflow-hidden">
          <CardHeader className="pb-2 pt-6 px-6">
            <CardTitle className="text-2xl font-bold text-slate-800">Find Your Next Vehicle</CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            {/* Main search row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-2">
              <div className="relative md:col-span-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  className="pl-10 h-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter lot, VIN, keywords"
                />
              </div>
              <div className="md:col-span-3">
                <Select>
                  <SelectTrigger className="h-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Any Make" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="toyota">Toyota</SelectItem>
                    <SelectItem value="honda">Honda</SelectItem>
                    <SelectItem value="ford">Ford</SelectItem>
                    <SelectItem value="bmw">BMW</SelectItem>
                    <SelectItem value="mercedes">Mercedes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-3">
                <Select>
                  <SelectTrigger className="h-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Any Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="camry">Camry</SelectItem>
                    <SelectItem value="civic">Civic</SelectItem>
                    <SelectItem value="f150">F-150</SelectItem>
                    <SelectItem value="3series">3 Series</SelectItem>
                    <SelectItem value="eclass">E-Class</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Advanced search link */}
            <div className="flex justify-end mb-4">
              <Link href="#" className="text-sm text-blue-500 hover:text-blue-600 transition-colors">
                Advanced Search
              </Link>
            </div>

            {/* Filter row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <Select>
                <SelectTrigger className="h-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="From" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2018">2018</SelectItem>
                  <SelectItem value="2019">2019</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="h-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="To" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="h-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Min Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5000">$5,000</SelectItem>
                  <SelectItem value="10000">$10,000</SelectItem>
                  <SelectItem value="15000">$15,000</SelectItem>
                  <SelectItem value="20000">$20,000</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="h-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Max Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="25000">$25,000</SelectItem>
                  <SelectItem value="30000">$30,000</SelectItem>
                  <SelectItem value="40000">$40,000</SelectItem>
                  <SelectItem value="50000">$50,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Checkbox row */}
            <div className="flex gap-6 mb-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="copart" className="h-5 w-5 text-blue-500 rounded border-slate-300" />
                <Label htmlFor="copart" className="text-sm font-medium text-slate-700">
                  Copart
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="iaai" className="h-5 w-5 text-blue-500 rounded border-slate-300" />
                <Label htmlFor="iaai" className="text-sm font-medium text-slate-700">
                  IAAI
                </Label>
              </div>
            </div>

            {/* Search button */}
            <Button className="w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-white font-medium text-base rounded-lg transition-colors">
              Search
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

